import { Button } from "../../../components/common/button/button";
import { Card } from "../../../components/common/card/card";
import { Container } from "../../../components/common/container/container";
import { Text } from "../../../components/common/text/text";

export const PetProfile = () => {
  return (
    <>
      <Card background="gradient">
        <Container>
          <Text type="title" color="blue" >Fênix</Text>
          <Text>Sem raça definida</Text>
          <Text >RGA 1.234.567</Text>
          <Text >Microchip 123456789012345</Text>
        </Container>
      </Card>


    </>
  )
};
