# agent-benchmark-strategy-prototype

Create a website prototype that would serve as a benchmarking tool for gpt-engineer. Here are instructions and specifications for the website. Note that you have to implement only a prototype, and let me know how to wire it with actual data I will set up supply with.

Agent-benchmark subproject: Strategy

Vision:
Upon the execution of the main() function, it opens a browser window for each scenario, immediately executing initial prompts for all of them. A user is not supposed to see any code, only the website preview as well as text field showing instructions for the tester. When all the necessary prompting is done, the page would collect feedback from the user, going through every checklist instance, and prompting the user to leave his grade and feedback for all of them.

Some notes: 
Some adjustments may require a few prompts to be made. Example: agent makes further inquiry about the functionality. However, the agent may also implement the feature incorrectly in such a way that one more additional prompt would fix the issue. Thus there should be a clear boundary between the “failed scenario” and “more information is needed”, and QA should be instructed accordingly to be aware of the scenarios where he is allowed to prompt more than once for one “add feature” request.
While preparing the scenarios, I was focused on the “edit” part, as the interaction with the user and listening to its feedback is an important part of the agent’s functionality. Thus I tried to keep the initial prompts simple and put more focus on improving the tool the agent has itself created.
It may not be possible to implement some features or do some adjustments, as the agent failed to implement the previous part of the product (for example, you cannot change the button color if the button was not added successfully). Thus it may be worth instructing the QA to not proceed implementing those features impossible to implement, and take count of such outcomes as the one of agent performance measures.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/agent-benchmark-strategy-prototype.git
cd agent-benchmark-strategy-prototype
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
