import './style.css';
import Layouts from '../../layouts/index';
import EventImage from '../../components/EventImage';
import EventInfo from '../../components/EventInfo';
import Button from '../../components/Button';

function Details() {
  return (
    <Layouts>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <EventImage/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <EventInfo/>
              <Button buttonName="Buy"/>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default Details;
