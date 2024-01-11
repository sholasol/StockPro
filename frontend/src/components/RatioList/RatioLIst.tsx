import React from 'react'


type Props = {
  config: any;
  data: any;
};

const RatioLIst = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <>
        <div className="card mb-2">
          <h5 className="card-header">{row.label}</h5>
          <div className="card-body">
            <h5 className="card-title">{row.render(data)}</h5>
            <p className="card-text">{row.subTitle && row.subTitle}</p>
            <a 
            href="/cdn-cgi/l/email-protection"
            data-cfemail="17727a767e7b57607e7973646372653974787a"
            className="btn btn-primary">View Detail</a>
          </div>
        </div>
      </>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">{renderedCells}</ul>
    </div>
  )
}

export default RatioLIst