//? Import Styled Components
import { Section } from "../style";

//? Import Components
import Header from "./header";

interface CustomProps {
  component: () => JSX.Element;
}

const Layout = ({ component: Component }: CustomProps) => {
  return (
    <Section className="flex">
      <Section
        className={`w-full h-screen flex flex-col items-center justify-start duration-300 relative`}
      >
        <Header />
        <Component />
      </Section>
    </Section>
  );
};

export default Layout;
