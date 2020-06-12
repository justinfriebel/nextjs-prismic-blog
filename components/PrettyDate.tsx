import dayjs from "dayjs";
import { Date } from "prismic-reactjs";

const PrettyDate = (date: string) => {
  return dayjs(Date(date).toString()).format("MMMM D YYYY");
};

export default PrettyDate;
