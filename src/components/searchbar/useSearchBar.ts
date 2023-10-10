interface IUseSearchBar {
  onSearch: (key: string) => unknown;
}

function useSearchBar(props: IUseSearchBar) {
  const { onSearch } = props;

  function searchHandler(e: React.FormEvent) {
    e.stopPropagation();
    e.preventDefault();

    //   @ts-ignore
    const key = e.target.search.value;

    if (key) {
      onSearch(key);
    }
  }

  return {
    searchHandler,
  };
}

export default useSearchBar;
