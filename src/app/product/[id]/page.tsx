import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function page({ params: { id } }: Props) {
  return <div>page : {id} id page</div>;
}

export default page;
