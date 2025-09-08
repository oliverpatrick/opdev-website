import { renderHook, act } from "@testing-library/react";
import { useNotifications } from "./notifications-store"; // adjust path if needed

test("should add and remove notifications", () => {
  const { result } = renderHook(() => useNotifications());

  expect(result.current.notifications).toEqual([]);

  act(() => {
    result.current.addNotification({
      title: "Hello World",
      type: "info",
      message: "This is a notification",
    });
  });

  expect(result.current.notifications).toHaveLength(1);
  expect(result.current.notifications[0]).toMatchObject({
    title: "Hello World",
    type: "info",
    message: "This is a notification",
  });

  const id = result.current.notifications[0].id;

  act(() => {
    result.current.dismissNotification(id);
  });

  expect(result.current.notifications).toEqual([]);
});
