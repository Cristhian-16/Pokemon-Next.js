import { useEffect, useState } from 'react';

export const useTooggleFavorite = () => {
  const [arrFavorites, setArrFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setArrFavorites(storedFavorites);
  }, []);

  const toogleFavorites = (id: number) => {
    if (arrFavorites.includes(id)) {
      const newFavorites = arrFavorites.filter(item => item !== id);
      setArrFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    } else {
      const newFavorites = [...arrFavorites, id];
      setArrFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const existInFavorites = (id: number): boolean => {
    return arrFavorites.includes(id);
  };

  return {
    arrFavorites,
    toogleFavorites,
    existInFavorites
  };
};
