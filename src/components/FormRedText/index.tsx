interface FormRedTextProps {
  title: string;
}

const FormRedText = ({ title }: FormRedTextProps) => {
  return (
    <div>
      <p className="text-[11px] text-[#FA657D]">{title}</p>
    </div>
  );
};

export default FormRedText;
