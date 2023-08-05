import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addCategoryAction } from "../../../../redux/actions/blog.action";
import { RESET_CATEGORIES } from "../../../../redux/constant/blog.constants";
import { RootState } from "../../../../utils/store";

export default function AddCategoires() {
  const addCategory = useSelector((state: RootState) => state.addCategory);
  const { loading, error, success }: any = addCategory;

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const addCat = (categoires: any) => {
    console.log(categoires.categories);
    dispatch(addCategoryAction(categoires.categoires) as any);
  };

  useEffect(() => {
    if (success) {
      Swal.fire("Successfull!", "Your message has been delivered!", "success");

      setValue("categories", "");
      dispatch({ type: RESET_CATEGORIES });
    }
  }, [dispatch, success]);
  return (
    <form onSubmit={handleSubmit(addCat)}>
      <div className="mb-4">
        <div>Categories Name</div>
        <input
          type="text"
          {...register("categories", {
            required: "categoires is required",
          })}
          placeholder="Enter Categories"
          className=" w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE]text-base text-body-color placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      "
        />
        {errors.categories && (
          <div className="text-red-500">
            {(errors.categories as any).message}
          </div>
        )}
      </div>
      <div className="mb-10">
        <input
          type="submit"
          value="Add"
          className="
                                w-full
                                rounded-md
                                border
                                py-3
                                button-primary
                                text-base 
                                cursor-pointer
                                transition
                      "
        />
      </div>
    </form>
  );
}
