import { FormProvider as Form } from "react-hook-form";

// ----------------------------------------------------------------------

export function SFormProvider({
  children,
  onSubmit,
  methods,
  ...rest
}) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...rest}>
        {children}
      </form>
    </Form>
  );
}
