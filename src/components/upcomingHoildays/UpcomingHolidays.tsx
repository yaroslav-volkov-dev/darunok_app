import { Icon } from '../icon';

export const UpcomingHolidays = () => {
  return (
    <>
      <h5 className="mb-2">Upcoming Holidays</h5>
      <div className="flex flex-col gap-3 p-3 overflow-y-scroll styled-scrollbar grow bg-light-blue relative">

        <div className="w-full h-20 bg-white shrink-0"></div>
        <div className="w-full h-20 bg-white shrink-0"></div>
        <div className="w-full h-20 bg-white shrink-0"></div>
        <div className="w-full h-20 bg-white shrink-0"></div>

        <Icon
          name="chevron_right"
          role="button"
          className="absolute bottom-4 rotate-90 left-1/2 -translate-x-1/2"
          size={48}
        />
      </div>
    </>
  );
};
