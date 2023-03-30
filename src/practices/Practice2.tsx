export const Practice2 = () => {
  const calcTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>練習問題:返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
//返却値の型指定は関数の[]の中に引数が書いてあるがその後に:で型を書いていくイメージ
