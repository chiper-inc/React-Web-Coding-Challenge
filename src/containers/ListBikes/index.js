import { useState, useEffect } from "react";
import { fetchListBikesTotal } from "../../services/api";
import { useQuery } from "react-query";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MediaControlCard from "../../components/Cards";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Alert from "../../components/Alert";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";
import Search from "../../components/Search";

export default function SimpleContainer() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [openModal, setOpenModal] = useState(false);
  const [dataBike, setDataBike] = useState();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [searched, setSearched] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);

  const { data: total } = useQuery("todos", fetchListBikesTotal);

  const fetchProjects = (page) =>
    fetch(
      `https://bikeindex.org/api/v3/search?page=1&per_page=100&location=berlin&stolenness=proximity`
    ).then((res) => res.json());

  const { isLoading, isError, error, data } = useQuery(
    ["bikes", page],
    () => fetchProjects(page),
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    setFilteredData(data?.bikes);
  }, [data]);

  const requestSearch = (searchedVal) => {
    setSearched(searchedVal);
    const newFilter = data?.bikes.filter((value) => {
      return value.title.toLowerCase().includes(searchedVal.toLowerCase());
    });

    if (searchedVal === "") {
      setFilteredData(data?.bikes);
    } else if (newFilter.length === 0) {
      setFilteredData(data?.bikes);
      setNotify({
        isOpen: true,
        message: "No result",
        type: "warning",
      });
    } else {
      setFilteredData(newFilter);
    }
  };

  const requestSearchDate = () => {
    const date1 = value.getTime() / 1000;
    const date2 = value1.getTime() / 1000;
    const newFilter = data?.bikes.filter((date) => {
      return date.date_stolen >= date1 && date.date_stolen <= date2;
    });

    if (value === "" && value1 === "") {
      setFilteredData(data?.bikes);
    } else if (newFilter.length === 0) {
      setFilteredData(data?.bikes);
      setNotify({
        isOpen: true,
        message: "No result",
        type: "warning",
      });
    } else {
      setFilteredData(newFilter);
    }
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleClickOpen = (bikes) => {
    setDataBike(bikes);
    setOpenModal(true);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
  };

  const handleChangeDate1 = (newValue) => {
    setValue1(newValue);
  };

  const handleClear = () => {
    setSearched("");
    setValue(null);
    setValue1(null);
    setFilteredData(data?.bikes);
  };

  if (isError) {
    return setNotify({
      isOpen: true,
      message: error.message,
      type: "error",
    });
  }

  return (
    <>
      <CssBaseline />
      <Container fixed sx={{ padding: "20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={12}></Grid>
          <Grid item xs={5}>
            <Search
              value={searched}
              onChange={(searchVal) => requestSearch(searchVal)}
              onCancelSearch={() => cancelSearch()}
            />
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3} sx={{ margin: "1em" }}>
                <DesktopDatePicker
                  label="From"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={1} sx={{ margin: "1em" }} direction="row">
                <DesktopDatePicker
                  label="To"
                  inputFormat="MM/dd/yyyy"
                  value={value1}
                  onChange={handleChangeDate1}
                  renderInput={(params) => <TextField {...params} />}
                />
                <IconButton
                  aria-label="delete"
                  onClick={requestSearchDate}
                  disabled={value === null || value1 === null}
                >
                  <SearchIcon sx={{ fontSize: 33 }} />
                </IconButton>
                <IconButton aria-label="delete" onClick={handleClear}>
                  <HighlightOffIcon sx={{ fontSize: 33 }} color="error" />
                </IconButton>
              </Stack>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} alignItems="flex-end">
              <Typography
                variant="h6"
                component="div"
                sx={{ margin: "1em" }}
                color="text.secondary"
              >
                Total: {total?.stolen}
              </Typography>
            </Stack>
            <Stack spacing={2} alignItems="center">
              {!!data && (
                <Pagination
                  count={Math.ceil(data?.bikes.length / 10)}
                  page={page}
                  onChange={handleChange}
                  defaultPage={1}
                  showFirstButton
                  showLastButton
                />
              )}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <>
                <Loading />
                <Loading />
                <Loading />
              </>
            ) : (
              filteredData
                ?.slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((bike) => {
                  return (
                    <MediaControlCard
                      key={bike.id}
                      title={bike.title}
                      description={bike.description}
                      location={bike.stolen_location}
                      date={bike.date_stolen}
                      img={bike.large_img}
                      handleClickOpen={() => handleClickOpen(bike)}
                    />
                  );
                })
            )}
          </Grid>
        </Grid>
        <Stack spacing={2} alignItems="center">
          {!!data && (
            <Pagination
              count={Math.ceil(data?.bikes.length / 10)}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              showFirstButton
              showLastButton
            />
          )}
        </Stack>
      </Container>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={dataBike}
      />
      <Alert notify={notify} setNotify={setNotify} />
    </>
  );
}
