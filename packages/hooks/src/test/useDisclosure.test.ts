import { renderHook, act } from '@testing-library/react-hooks';
import useDisclosure from '../useDisclosure';

describe('useDisclosure', () => {
  it('Should allow to set default value for isOpen', () => {
    const { result } = renderHook(() => useDisclosure({ defaultIsOpen: true }));

    expect(result.current.isOpen).toBeTruthy();
  });

  it('onOpen and onClose should modify isOpen and trigger passed-in callback correctly', () => {
    const onCloseSpy = jest.fn();
    const onOpenSpy = jest.fn();
    const { result } = renderHook(() =>
      useDisclosure({ onClose: onCloseSpy, onOpen: onOpenSpy })
    );

    expect(result.current.isOpen).toBeFalsy();

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBeTruthy();
    expect(onOpenSpy).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBeFalsy();
    expect(onCloseSpy).toHaveBeenCalledTimes(1);
  });

  it('onToggle should modify isOpen and trigger passed-in callback correctly', () => {
    const onCloseSpy = jest.fn();
    const onOpenSpy = jest.fn();
    const { result } = renderHook(() =>
      useDisclosure({
        onClose: onCloseSpy,
        onOpen: onOpenSpy,
        defaultIsOpen: true,
      })
    );

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toBeFalsy();
    expect(onCloseSpy).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onToggle();
    });
    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toBeFalsy();
    expect(onCloseSpy).toHaveBeenCalledTimes(2);
    expect(onOpenSpy).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.isOpen).toBeTruthy();
    expect(onOpenSpy).toHaveBeenCalledTimes(2);
  });
});
