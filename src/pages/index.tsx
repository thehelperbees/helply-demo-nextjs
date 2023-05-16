import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Sample CMS"
          description="Next js Boilerplate CMS"
        />
      }
    >
      <h2 className="text-2xl font-bold">
        Sample CMS Boilerplate - Click Nav to Try CMS
      </h2>
    </Main>
  );
};

export default Index;
