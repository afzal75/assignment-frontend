"use client";

import Loading from "@/app/loading";
import Form from "@/components/form/Form";
import FormInput from "@/components/form/FormInput";
import LoadingButton from "@/components/ui/LoginSpinner";
import SmallSpinner from "@/components/ui/SmallSpinner";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateServices = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [createService] = useCreateServiceMutation();
  const IMAGEURL = process.env.NEXT_PUBLIC_IMBB_KEY;
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImage(file);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image as File);

    const url = `https://api.imgbb.com/1/upload?key=${IMAGEURL}`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.data) {
        data.image = responseData?.data?.display_url;

        const res = await createService(data);
        if (res) {
          toast("Service Created", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        router.push("/dashboard/service");
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="py-10">
        <div className="container xl:w-[40%] px-20 py-5 border-gray-900 mt-5 border rounded-xl">
          <Form submitHandler={onSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Submit Your Services
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-6">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="file-input file-input-bordered w-full"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <FormInput
                        id=""
                        name="title"
                        type="text"
                        label="Title"
                        placeholder="enter your title"
                        className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <FormInput
                        id=""
                        name="description"
                        type="text"
                        label="Description"
                        placeholder="enter your description"
                        className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <div className="mt-2">
                      <FormInput
                        id=""
                        name="price"
                        type="text"
                        label="Price"
                        placeholder="enter your price"
                        className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <LoadingButton
                type="submit"
                className="btn btn-accent mt-3 w-full"
                value="Login"
              >
                {loading ? <SmallSpinner /> : "submit"}
              </LoadingButton>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateServices;
