import { useState, useMemo } from "react";
import styles from "./index.module.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
} from "@tanstack/react-table";
import { User } from "@constants/GlobalTypes";
import { useTranslation } from "react-i18next";
import {
  Box,
  Chip,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { convertEnglishToPersianDigits } from "@utils/index";
import IPaginate from "@cmp/common/pagination";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { RootState } from "@redux/Store";

const DataTable = (props: { data: User[] }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const columnHelper = createColumnHelper<User>();
  const columns = useMemo(
    () => [
      columnHelper.accessor("first_name", {
        header: t("FirstName"),
      }),
      columnHelper.accessor("last_name", {
        header: t("LastName"),
      }),
      columnHelper.accessor("code", {
        header: t("Code"),
        cell: (info) => (
          <div>
            <span>{convertEnglishToPersianDigits(info.getValue())}</span>
          </div>
        ),
      }),
      columnHelper.accessor("company", {
        header: t("Company"),
      }),
      columnHelper.accessor((row) => row.status, {
        header: t("Status"),
        cell: (info) => (
          <>
            <Stack alignItems={"center"} direction={"row"} gap={2}>
              <Box
                width={20}
                height={20}
                border={5}
                borderRadius={"50%"}
                borderColor={"#CBCBCB"}
                bgcolor={
                  info.getValue()
                    ? theme.palette.success.main
                    : theme.palette.error.main
                }
              />
              <Typography
                component={"span"}
                variant="body2"
                sx={{
                  color: info.getValue()
                    ? theme.palette.success.main
                    : theme.palette.error.main,
                }}
              >
                {info.getValue() ? t("Active") : t("Deactive")}
              </Typography>
            </Stack>
          </>
        ),
      }),
      columnHelper.accessor("access", {
        header: t("Access"),
        cell: (info) => (
          <Chip
            label={`${t("Access")} ${convertEnglishToPersianDigits(
              info.getValue()
            )}`}
            className={styles[`access-level-${info.getValue()}`]}
            sx={{ color: theme.palette.common.white, p: [1, 2] }}
          />
        ),
      }),
    ],
    [columnHelper, t, theme]
  );

  const [sorting, setSorting] = useState<SortingState>([]);
  const filter = useSelector((state: RootState) => state.global.filterQuery);
  const table = useReactTable({
    data: props.data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filter,
    },
    onSortingChange: setSorting,
  });
  return (
    <>
      <TableContainer component={Box} mt={3}>
        <Table
          sx={{
            minWidth: 680,
            tableLayout: "fixed",
            borderCollapse: "separate",
            borderSpacing: "0px 15px",
          }}
          aria-label={"data-table-raahbar"}
        >
          <TableHead sx={{ mb: 2 }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    align="center"
                    key={header.id}
                    sx={{
                      borderTop: "1px solid rgba(224, 224, 224, 1)",
                      cursor: "pointer",
                    }}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: <ArrowDropUpIcon fontSize="large" />,
                        desc: <ArrowDropDownIcon fontSize="large" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </Box>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  backgroundColor: "#F2F2F2",
                  border: 0,
                  borderRadius: "10px",
                  "& td, & th": {
                    border: 0,
                  },
                  "& td:first-of-type, & th:first-of-type": {
                    borderRadius: "10px 0px 0px 10px",
                  },
                  "& td:last-child, & th:last-child": {
                    borderRadius: "0px 10px 10px 0px",
                  },
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} align="center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={3}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Typography>
            {t("TableShow", {
              from: convertEnglishToPersianDigits(
                table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1
              ),
              to: convertEnglishToPersianDigits(
                (table.getState().pagination.pageIndex + 1) *
                  table.getState().pagination.pageSize
              ),
              total: convertEnglishToPersianDigits(props.data.length),
            })}
          </Typography>
          <Select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            sx={{ p: 0, minWidth: 100 }}
            className={styles["my-select"]}
          >
            {[10, 25, 50].map((pageSize) => (
              <MenuItem key={pageSize} value={pageSize}>
                {convertEnglishToPersianDigits(pageSize)}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <IPaginate
          count={
            props.data &&
            Math.ceil(props.data.length / table.getState().pagination.pageSize)
          }
          onChange={(_event, page: number) => {
            table.setPageIndex(page - 1);
          }}
          page={table.getState().pagination.pageIndex + 1}
        />
      </Stack>
    </>
  );
};

export default DataTable;
