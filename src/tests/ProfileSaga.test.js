import recordSaga from 'tests/testUtils';
import setProfileRequest from 'modules/profile/api';
import { setProfileSaga } from 'modules/profile/sagas';
import { setProfileSuccess, setProfile } from 'modules/profile/actions';

describe.only('ProfileSaga', () => {
  setProfileRequest = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });
  setProfileRequest.mockImplementation(() => jest.fn());

  it('', async () => {
    const dispatched = await recordSaga(
      setProfileSaga,
      setProfile,
    );

    expect(setProfileRequest).toHaveBeenCalledWith(1);
    expect(dispatched).toContainEqual(setProfileSuccess());
  });
});
