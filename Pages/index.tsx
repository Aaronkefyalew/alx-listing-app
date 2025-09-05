import type { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { DEFAULT_IMAGE } from '../constants';

const Home: NextPage = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card
        title="Sample Property"
        image={DEFAULT_IMAGE}
        description="A beautiful property located downtown."
      />
      <Button text="Book Now" onClick={() => alert('Booked!')} />
    </div>
  );
};

export default Home;
