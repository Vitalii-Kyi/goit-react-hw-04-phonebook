import { HIPhoneOutline } from '@icongo/hi/lib/HIPhoneOutline';

export const ContactItem = ({ details: { name, number, id }, onDelete }) => {
  return (
    <>
      <HIPhoneOutline />
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
    </button >
    </>
  );
};