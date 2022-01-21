import {Button, Container, Stack} from "react-bootstrap";
import BudgetCard from "./components/BudgetCard"

function App() {
    return <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
            <h1 className="me-auto">Budgetz</h1>
            <Button variant="outline-primary">Add Budget</Button>
            <Button variant="outline-danger">Add Expense </Button>
        </Stack>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start"
        }}>
            <BudgetCard
                name="Entertainment"
                amount={100}
                max={100}>
            </BudgetCard>
        </div>
    </Container>
}

export default App;
