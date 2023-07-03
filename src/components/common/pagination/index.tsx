import { Pagination, PaginationItem } from "@mui/material";
import { convertEnglishToPersianDigits } from "@utils/index";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type IPaginateProps = {
  onChange: (event: React.BaseSyntheticEvent, page: number) => void;
  page: number;
  count: number | undefined;
};

export default function IPaginate(props: IPaginateProps) {
  return (
    <>
      <Pagination
        color="primary"
        shape="rounded"
        variant="outlined"
        size="large"
        {...props}
        renderItem={(params) => {
          params = {
            ...params,
            page:
              typeof params.page === "number"
                ? convertEnglishToPersianDigits(params.page)
                : params.page,
          };
          return (
            <PaginationItem
              {...params}
              sx={{ borderRadius: "10px" }}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            />
          );
        }}
      />
    </>
  );
}
