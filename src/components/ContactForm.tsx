export const ContactForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const body = `Hola, mi nombre es: ${name} y mi correo es: ${email}. Estoy interesado en contratar tus servicios, tengo este problema: ${message}`;

    window.open(
      `mailto:jsandovaldev.pe@gmail.com?subject=Cotización de proyecto - ${name}&body=${body}`
    );
  };

  return (
    <form
      className="w-full flex flex-col items-center lg:items-start gap-[1.875rem]"
      onSubmit={onSubmit}
    >
      <label htmlFor="name" className="w-full flex flex-col">
        <p className="font-medium text-[1rem] opacity-80">
          Nombres y apellidos:
        </p>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full h-[2rem] appearance-none outline-none bg-transparent border-b-[1px] border-b-white70 text-[1rem] text-white80"
          required
        />
      </label>
      <label htmlFor="email" className="w-full flex flex-col">
        <p className="font-medium text-[1rem] opacity-80">Tu correo:</p>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-[2rem] appearance-none outline-none bg-transparent border-b-[1px] border-b-white70 text-[1rem] text-white80"
          required
        />
      </label>
      <label htmlFor="message" className="w-full flex flex-col">
        <p className="font-medium text-[1rem] opacity-80 mb-[0.5rem]">
          Cuéntame más sobre tu proyecto:
        </p>
        <textarea
          rows={1}
          name="message"
          className="w-full min-h-[32px] max-h-[100px] bg-transparent appearance-none outline-none border-b-[1px] border-b-white70 text-[1rem] text-white80"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        className="h-[2.5rem] w-full max-w-[8.75rem] appearance-none outline-none bg-transparent border-[1px] border-white70 rounded-[0.25rem] font-ubuntu-condensed text-[1.25rem] text-white80 text-center"
      >
        Enviar
      </button>
    </form>
  );
};
