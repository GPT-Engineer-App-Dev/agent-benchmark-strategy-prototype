import { useState } from "react";
import { Container, VStack, Text, Button, Textarea, Box, Heading, IconButton, useToast } from "@chakra-ui/react";
import { FaCheck, FaTimes } from "react-icons/fa";

const scenarios = [
  {
    id: 1,
    description: "Scenario 1: Implement a button that changes color when clicked.",
    checklist: ["Button is present", "Button changes color on click", "No errors in console"],
  },
  {
    id: 2,
    description: "Scenario 2: Create a form with validation.",
    checklist: ["Form is present", "Validation works correctly", "No errors in console"],
  },
];

const Index = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [grades, setGrades] = useState({});
  const toast = useToast();

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setFeedback("");
    } else {
      toast({
        title: "All scenarios completed.",
        description: "Thank you for your feedback!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleGrade = (checklistItem, grade) => {
    setGrades({
      ...grades,
      [currentScenario]: {
        ...grades[currentScenario],
        [checklistItem]: grade,
      },
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          GPT-Engineer Benchmark Tool
        </Heading>
        <Text fontSize="lg">{scenarios[currentScenario].description}</Text>
        <Box width="100%">
          {scenarios[currentScenario].checklist.map((item, index) => (
            <Box key={index} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
              <Text>{item}</Text>
              <Box>
                <IconButton aria-label="Pass" icon={<FaCheck />} colorScheme="green" onClick={() => handleGrade(item, "pass")} mr={2} />
                <IconButton aria-label="Fail" icon={<FaTimes />} colorScheme="red" onClick={() => handleGrade(item, "fail")} />
              </Box>
            </Box>
          ))}
        </Box>
        <Textarea placeholder="Leave your feedback here..." value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        <Button colorScheme="blue" onClick={handleNextScenario}>
          Next Scenario
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
