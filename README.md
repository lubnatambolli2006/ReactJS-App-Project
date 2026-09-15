# ReactJS Student Dashboard

## Introduction

This project is a simple Student Dashboard created using React.

The purpose of this project is to demonstrate the use of React components, props, state, and data flow between components.

## Features

- Displays student information
- Uses reusable React components
- Demonstrates passing data using props
- Demonstrates data flow from parent to child components
- Uses React state
- Includes an interactive button
- Responsive and clean layout

## React Concepts Demonstrated

### 1. Components

The application contains multiple components:

- `App`
- `Header`
- `StudentCard`

Components make the application easier to organize and reuse.

### 2. Props

Props are used to pass data from a parent component to a child component.

For example:

```javascript
<StudentCard
  name={student.name}
  course={student.course}
  marks={student.marks}
/>
