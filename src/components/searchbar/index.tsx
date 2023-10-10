import useSearchBar from "./useSearchBar";

interface ISearchBar {
  onSearch: (key: string) => unknown;
}

function SearchBar(props: ISearchBar) {
  const { onSearch } = props;

  const { searchHandler } = useSearchBar({ onSearch });

  return (
    <form onSubmit={searchHandler}>
      <input name="search" placeholder="what are you searching for ...?" />
    </form>
  );
}

export default SearchBar;
