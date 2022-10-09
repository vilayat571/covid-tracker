interface IIntl {
  (count: number): string;
}
export const intlNumber: IIntl = (count) => {
  return new Intl.NumberFormat("az-IN").format(count);
};
