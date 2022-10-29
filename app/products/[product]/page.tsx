export default function Page({ params, searchParams }: {
    params: { product: string },
    searchParams: { id: string },
  }) {
    return (
      <>
        <p>{params.product}</p>
        <p>{searchParams.id}</p>
      </>
    );
  }