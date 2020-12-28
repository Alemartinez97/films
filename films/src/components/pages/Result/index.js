import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Container } from "@material-ui/core";
import queryString from "query-string";

import MovieResult from "../../MovieResult/index";
import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors/index";
export default (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));
  console.log(movies)
  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !isLooked) {
      setIsLooked(true)
      dispatch(searchMovie({ movieName }));
    }
  });
  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <MovieResult Key={index} data={value} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} />;
    }
    return <div />;
  };
  return <Container>{renderMovies()}</Container>;
};
