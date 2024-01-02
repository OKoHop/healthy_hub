export  const calculateTotal = (array) => {
    return array.reduce(
      (total, item) => {
        total.carbohidrates += item.carbohidrates || 0;
        total.protein += item.protein || 0;
        total.fat += item.fat || 0;
        return total;
      },
      { carbohidrates: 0, protein: 0, fat: 0 }
    );
  };