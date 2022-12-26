import AdminLayout from "../../components/AdminLayout";
export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home(): JSX.Element {
  return (
    <AdminLayout>
      <div className="p-10"></div>
    </AdminLayout>
  );
}
