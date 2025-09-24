import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { capitalize } from "../../utils/capitalize";
import type { ErrorResponse } from "../../types/Shared";

export function handleApiError(error: AxiosError<ErrorResponse>) {
    const errorData = error.response?.data;

    if (!errorData?.errors) return toast.error(errorData?.message || "Something went wrong");

    if (errorData?.errors) {
        
          Object.entries(errorData.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
                messages.forEach((msg) => {
                    toast.error(`${capitalize(field)}: ${msg}`);
                });
            } else {
                toast.error(`${capitalize(field)}: ${messages}`);
            }
        });
    } else {
        toast.error(errorData?.message || "Something went wrong");
    }

    return error;
}


