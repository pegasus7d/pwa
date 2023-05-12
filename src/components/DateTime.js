import { Flex, Text, Divider } from "@chakra-ui/react";

const DateTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let day = d.getDay();
  return (
    <Flex alignItems="center" gap={2}>
      <Divider orientation="horizontal" />
      <Text size="sm" sx={{ whiteSpace: "nowrap" }}>
        {day} {month}
        {year}
      </Text>
      <Divider orientation="horizontal" />
    </Flex>
  );
};
export default DateTime;
