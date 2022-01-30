/* eslint @typescript-eslint/no-explicit-any: 0 */
import {GradientPicker} from './GradientPicker';

describe('GradientPicker', () => {
  const stops = [
    {color: '#FFA23F', offset: 0},
    {color: '#FF624A', offset: 0.4},
    {color: '#FE0060', offset: 1},
  ];

  it('should call createLinearGradient once', () => {
    const picker = new GradientPicker(stops);
    expect(picker.context.createLinearGradient).toHaveBeenCalledTimes(1);
  });

  it('should call fillRect once', () => {
    const picker = new GradientPicker(stops);
    expect(picker.context.fillRect).toHaveBeenCalledTimes(1);
  });

  it('should call private rgbToHex method', () => {
    const picker = new GradientPicker(stops);

    const mockToHex = jest.fn(() => '#448aff');
    picker['rgbToHex'] = mockToHex;
    picker.at(50);

    expect(mockToHex).toHaveBeenCalledTimes(1);
  });

  it('should call "at" method', () => {
    const picker = new GradientPicker(stops);

    const mockAt = jest.fn(() => '#448aff');
    picker.at = mockAt;
    picker.at(50);

    expect(mockAt).toHaveBeenCalledTimes(1);
  });

  it('should call context.getImageData', () => {
    const picker = new GradientPicker(stops);

    const mockGetImageData = jest.fn(() => ({data: [9, 9, 9]}));
    picker.context.getImageData = jest.fn(mockGetImageData) as any;
    picker.at(50);

    expect(mockGetImageData).toHaveBeenCalledTimes(1);
  });
});
