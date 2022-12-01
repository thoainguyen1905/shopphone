import contactApi from "@services/contactApi";
import { toastifyError, toasttifySuccess } from "@/utils/toastify";

const useContact = () => {
  const onCreateNewContact = async (data: any) => {
    try {
      const res = await contactApi.createContact(data);
      toasttifySuccess("Gửi thông tin thành công");
    } catch (error) {
      toastifyError("Đã có lỗi xảy ra");
    }
  };
  return { onCreateNewContact };
};

export default useContact;
