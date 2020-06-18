import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Date } from "prismic-reactjs";

dayjs.extend(advancedFormat);

const PrettyDate = (date: string) => {
  return dayjs(Date(date).toString()).format("MMMM Do, YYYY");
};

export { PrettyDate };
