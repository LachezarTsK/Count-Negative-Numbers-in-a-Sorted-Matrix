
#include <vector>
using namespace std;

class Solution {
    
public:
    int countNegatives(vector<vector<int>>& grid) {
        if (grid.size() == 0) {
            return 0;
        }

        const size_t rows = grid.size();
        const size_t columns = grid[0].size();
        if (grid[0][0] < 0) {
            return rows * columns;
        }

        int countNegativeNumbers = 0;
        for (const auto& row : grid) {
            if (row[columns - 1] >= 0) {
                continue;
            }
            if (row[0] < 0) {
                countNegativeNumbers += columns;
                continue;
            }
            countNegativeNumbers += numberOfNegativesInCurrentRow(row, columns);
        }
        return countNegativeNumbers;
    }

private:
    int numberOfNegativesInCurrentRow(const vector<int>& row, int columns) {
        int left = 0;
        int right = columns - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (row[mid] < 0 && (mid - 1 < 0 || row[mid - 1] >= 0)) {
                return columns - mid;
            }

            if (row[mid] >= 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return 0;
    }
};
