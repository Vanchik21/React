import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object({
  from: yup.string().required("Поле 'Звідки' є обов'язковим"),
  to: yup.string().required("Поле 'Куди' є обов'язковим"),
  weight: yup
    .number()
    .typeError("Вага має бути числом")
    .positive("Вага має бути більше 0")
    .required("Поле 'Вага' є обов'язковим"),
  size: yup
    .number()
    .typeError("Максимальна сторона має бути числом")
    .positive("Значення має бути більше 0")
    .required("Поле 'Максимальна сторона' є обов'язковим"),
  declaredValue: yup
    .number()
    .typeError("Вартість має бути числом")
    .positive("Значення має бути більше 0")
    .required("Поле 'Оголошена вартість' є обов'язковим"),
});

export default function UkrposhtaCalculator() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2>Розрахунок вартості</h2>

      {/* 1. Маршрут */}
      <div className="form-section">
        <h3>1. Маршрут</h3>
        <label>Звідки</label>
        <input {...register('from')} placeholder="Введіть назву населеного пункту" />
        <p className="error">{errors.from?.message}</p>

        <label>Куди</label>
        <input {...register('to')} placeholder="Введіть назву населеного пункту" />
        <p className="error">{errors.to?.message}</p>
      </div>

      {/* 2. Тип відправлення */}
      <div className="form-section">
        <h3>2. Тип відправлення</h3>
        <label>
          <input type="radio" value="Посилка" {...register('type')} defaultChecked /> Посилка
        </label>
        <label>
          <input type="radio" value="Документи" {...register('type')} /> Документи
        </label>
        <label>
          <input type="radio" value="Лист" {...register('type')} /> Лист
        </label>
      </div>

      {/* 3. Параметри відправлення */}
      <div className="form-section">
        <h3>3. Параметри відправлення</h3>
        <label>Вага, кг</label>
        <input type="number" {...register('weight')} placeholder="Введіть вагу" />
        <p className="error">{errors.weight?.message}</p>

        <label>Максимальна сторона, см</label>
        <input type="number" {...register('size')} placeholder="Введіть розмір" />
        <p className="error">{errors.size?.message}</p>

        <label>Оголошена вартість, грн</label>
        <input type="number" {...register('declaredValue')} placeholder="Введіть вартість" />
        <p className="error">{errors.declaredValue?.message}</p>

        {/* Чекбокси */}
        <label>
          <input type="checkbox" {...register('courier')} /> Виклик кур'єра
        </label>
        <label>
          <input type="checkbox" {...register('sms')} /> SMS про отримання
        </label>
      </div>

      <button type="submit" className="submit-button">Розрахувати вартість</button>
    </form>
  );
}
