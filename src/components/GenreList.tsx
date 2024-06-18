import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      <List>
        {data.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                textAlign={"right"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize={"large"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
