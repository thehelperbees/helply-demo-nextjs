
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import useSWR from 'swr';

const fetcher = (...args: any[]) => fetch(args).then(res => res.json());

const StoryblokComponent = () => {
  const storiesResponse = useSWR('/api/storyblok/stories', fetcher);
  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>you can use a storyblok client to call components</p>
      {storiesResponse.isLoading ? (
        <div
          className="my-4 w-full rounded-md border-2 border-gray-400 px-2 py-1"
        >
          <p>loading...</p>
        </div>
      ) : storiesResponse.data.stories.map((story: any) => {
        return story.content.body.map((content:any) => {
          console.log(content)
          if (content.component === "feature") {
            return(<h1>{content.name}</h1>)
          } else if (content.component === "teaser") {
            return (<h4>{content.headline}</h4>);
          } else if (content.component === "grid") {
            return (
              <table>
                <tr>
                  {content.columns.map((col:any) => {
                    return (<td>{col.name}</td>)
                  })}
                </tr>
              </table>
            );
          }
        });
      })}
    </Main>
  );
};

export default StoryblokComponent;
