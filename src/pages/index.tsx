import { Alert, AlertTitle, Box, Container } from "@mui/material";
import { TFullCashListItem } from "@/shared/api/models";
import { fetchFullCashList } from "@/shared/api/fetch-full-cash-list";
import { CashListViewer } from "@/widgets/cash-list-viewer/ui/cash-list-viewer";
import { GetServerSideProps } from "next";

interface IHomePage {
  readonly cashList: TFullCashListItem[];
}

export default function Home({ cashList }: IHomePage) {
  return (
    <main>
      <Box py={8}>
        <Container>
          {cashList?.length ? (
            <CashListViewer options={cashList} initialValues={["USD", "EUR"]} />
          ) : (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              Fetching is failed
            </Alert>
          )}
        </Container>
      </Box>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const currency = (query?.currency as string) || "RUB";
  let cashList: TFullCashListItem[] = [];

  try {
    cashList = await fetchFullCashList(currency);
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      cashList,
    },
  };
};
