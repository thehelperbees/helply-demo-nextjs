
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(args).then(res => res.json())

const Hygraph = () => {
  const assetResponse = useSWR('/api/hygraph/asset', fetcher);
  const contentResponse = useSWR('/api/hygraph/content', fetcher);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>Hygraph is GraphQL Centric, Multi-Tenant Headless CMS</p>
      {assetResponse.isLoading ? (
        <div
          className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        >
          <p>loading...</p>
        </div>
      ) : assetResponse.data.data.assets.map((asset: any) => {
        return (
          <img
            src={asset.url}
            alt="Nextjs starter banner"
          />
        );
      })}

      {contentResponse.isLoading ? (
        <div
          className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        >
          <p>loading...</p>
        </div>
      ) : contentResponse.data.data.testModels.map((content: any) => {
        return (
          <div>
            <p>
              {content.multiLineText}
            </p>
            <p>{content.updatedAt} | {content.createdAt}</p>
          </div>
        );
      })}
    </Main>
  );
};

export default Hygraph;
