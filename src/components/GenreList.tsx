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
import { useState } from "react";
import genres from "../data/genres";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId: number | undefined;
}

const GenreList = ({
  selectedGenreId: selectedGenre,
  onSelectGenre,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const genresToShow = showAll ? data?.results : data?.results.slice(0, 3);

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genresToShow?.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize="32px"
                objectFit={"cover"}
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                textAlign={"left"}
                whiteSpace="normal"
                fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
                fontSize={"large"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
      {genres.results.length > 3 && (
        <Button
          marginTop={2}
          variant="link"
          leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
          onClick={toggleShowAll}
          color="gray.500"
        >
          {showAll ? "Show less" : "Show more"}
        </Button>
      )}
    </>
  );
};

export default GenreList;
