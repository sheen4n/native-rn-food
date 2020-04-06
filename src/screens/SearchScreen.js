import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price ==== '$' || '$$' | '$$$'
    return results.filter(r => r.price === price);
  };

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        term={term}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        ></ResultsList>
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice("$$")}
        ></ResultsList>
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        ></ResultsList>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
