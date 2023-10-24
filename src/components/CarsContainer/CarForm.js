import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import { carService } from "../../services/carService";
import { carValidator } from "../../validators/carValidator";
import { useEffect } from "react";

const CarForm = ({ setTrigger, carForUpdate }) => {
    const {register, reset, handleSubmit, formState: { isValid, errors }, setValue,
    } = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator),
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    const save = async (car) => {
        console.log(car);
        await carService.crate(car);
        setTrigger((prev) => !prev);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')} />
            {errors.brand && <div>{errors.brand.message}</div>}
            <input type="text" placeholder={'price'} {...register('price', { valueAsNumber: true })} />
            {errors.price && <div>{errors.price.message}</div>}
            <input type="text" placeholder={'year'} {...register('year', { valueAsNumber: true })} />
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export { CarForm };
