import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(utc);
dayjs.extend(tz);
dayjs.extend(relativeTime);

export const getRelativeTime = (utcParam: number): string => {
  const utcDate = dayjs.unix(utcParam);
  const timezone = dayjs.tz.guess();
  const convertedTime = utcDate.tz(timezone);
  return convertedTime.fromNow();
}