import React from "react";

interface ErrorBoundaryProps {
  hasError: boolean;
  error: string;
}
export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryProps
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: any, info: any) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
