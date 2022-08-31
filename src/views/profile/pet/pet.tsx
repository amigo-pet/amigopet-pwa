import { Card } from "@components/templates";
import { Container } from "@components/common/container/container";
import { Text } from "@components/common/text/text";

export const PetProfile = () => {
  return (
    <>
      <Card background="gradient">
        <Container>
          <Text color="blue">Fênix</Text>
          <Text>Sem raça definida</Text>
          <Text>RGA 1.234.567</Text>
          <Text>Microchip 123456789012345</Text>
        </Container>
      </Card>
    </>
  );
};
