import { Button, Image } from '../../components';
import { Input } from '../../components/input';
import avatar from '../../assets/photo_2022-10-17_22-34-36.jpg';

export const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="rounded-full h-36 w-36"
        wrapperClassName="mb-5"
        src={avatar}
      />
      <form className="w-full grid grid-cols-2 gap-3">
        <Input label="Name" />
        <Input label="Last name" />
        <Input label="Email" />
        <Input label="Password" />
        <Input label="Country" />
        <Input label="City" />
        <div className="col-span-2 flex justify-end mt-3">
          <Button variant="primary" className="mr-3">Save Changes</Button>
          <Button variant="ghost">Back To Home</Button>
        </div>
      </form>
    </div>
  );
};

