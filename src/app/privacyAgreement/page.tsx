export default function PrivacyAgreement() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
        <main className="flex flex-col items-center justify-start w-full">
          {/* 图标*/}
          <div className="flex w-full items-center justify-center mb-4">
            <svg
              id="light"
              width="36.000000"
              height="36.000000"
              viewBox="0 0 24 24"
              fill="none"
            >
              <defs>
                <clipPath id="clip253_25714">
                  <rect
                    id="svg"
                    width="24.000000"
                    height="24.000000"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#clip253_25714)">
                <g opacity="0.000000">
                  <rect
                    id="rect"
                    width="24.000000"
                    height="24.000000"
                    fill="#000000"
                    fillOpacity="1.000000"
                  />
                </g>
                <path
                  id="path"
                  d="M13.12 3L18.64 5.2C18.85 5.29 19 5.38 19.09 5.5C19.19 5.6 19.25 5.77 19.26 6L19.26 12.36C19.25 13.51 19.01 14.59 18.55 15.59C18.1 16.59 17.41 17.57 16.48 18.54C16.12 18.93 15.67 19.3 15.15 19.67C14.63 20.03 13.96 20.42 13.12 20.86L13.12 23.26C14.56 22.48 15.62 21.87 16.3 21.42C16.98 20.98 17.55 20.51 18.01 20.02C19.11 18.87 19.94 17.7 20.5 16.48C21.07 15.25 21.36 13.92 21.37 12.5L21.37 5.5C21.37 4.93 21.21 4.48 20.88 4.13C20.56 3.77 20.11 3.48 19.54 3.26L13.12 0.73L13.12 3ZM4.48 3.26C3.94 3.47 3.5 3.76 3.15 4.12C2.81 4.47 2.63 4.9 2.63 5.38L2.63 12.5C2.65 13.96 2.93 15.3 3.48 16.54C4.04 17.76 4.87 18.92 6 20.02C6.68 20.7 7.3 21.24 7.85 21.62C8.41 22 9.08 22.4 9.88 22.8L10.87 23.26L10.87 20.86C10.03 20.43 9.36 20.04 8.85 19.68C8.34 19.33 7.89 18.95 7.5 18.54C6.58 17.57 5.89 16.59 5.43 15.59C4.97 14.59 4.75 13.51 4.75 12.36L4.75 6C4.75 5.79 4.79 5.63 4.87 5.51C4.97 5.39 5.12 5.29 5.34 5.2L10.87 3L10.87 0.73L4.48 3.26Z"
                  fill="#000000"
                  fillOpacity="0.901961"
                  fillRule="nonzero"
                />
                <path
                  id="path"
                  d="M10.62 14.76L13.37 14.76L13.37 8.26L10.62 8.26L10.62 14.76Z"
                  //   fill="#0A59F7"
                  fill="#A8D6D2"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </g>
            </svg>
          </div>

          <h2 className="w-full text-center text-xl sm:text-2xl font-bold text-gray-900 mt-2">
            关于观澜问卷与隐私的声明
          </h2>
          <p className="w-full text-center text-sm sm:text-base text-gray-500 font-medium mt-2">
            <span className="font-medium">更新日期：2025年11月11日</span>
          </p>

          {/* 简介 */}
          <div className="flex w-full items-start justify-start flex-col mt-6 sm:mt-8">
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold">观澜问卷</span> 是由{" "}
              <span className="font-bold">王津毅</span>
              （以下简称“我们”）为您提供的，用于
              <span className="font-bold">问卷的创建、分发和统计等功能</span>
              的应用。本隐私声明由我们为处理您的个人信息而制定。
              我们非常重视您的个人信息和隐私保护，将会按照法律要求和业界成熟的安全标准，为您的个人信息提供相应的安全保护措施。
            </p>
          </div>

          {/* 1. 我们如何收集和使用您的个人信息 */}
          <div className="flex w-full items-start justify-start flex-col mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-gray-900">
              1. 我们如何收集和使用您的个人信息
            </h5>
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              我们仅在有合法性基础的情形下才会使用您的个人信息。根据适用的法律，我们可能会基于您的同意、为履行/订立您与我们的合同所必需、履行法定义务所必需等合法性基础，使用您的个人信息。
              <br />
              1.1
              我们为您提供下述问卷创建、编辑、分发以及统计功能在您使用相关业务的过程中，我们会处理所必需的信息，以便履行我们的合同义务若您不提供相关信息，会影响到您使用本应用的相关功能/服务。
              <br />
              为了实现应用的分发和统计功能，在获取您的同意后我们需要收集您的问卷信息
              。
              <br />
              包括问卷标题、描述、分发统计、是否删除、问卷发放以及关闭时间、问题类型、问题名称、问题选项内容、问题文本内容。
            </p>
          </div>

          {/* 2. 管理您的个人信息 */}
          <div className="flex w-full items-start justify-start flex-col mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-gray-900">
              2. 管理您的个人信息
            </h5>
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              关于您的个人信息，您可以通过以下方式，行使查阅、复制、更正、删除等法定权利。
              <br />
              2.1 信息访问
              <br />
              您可以前往主页视图-列表，访问您的问卷的标题、属性、发放状态、对应的问题数据。
              <br />
              2.2 信息更正
              <br />
              当您需要更新您的个人信息，或发现我们处理您的个人信息有误时，您有权作出更正或更新。
              <br />
              您可以前往主页视图-列表-编辑，访问并修改您的问卷标题、属性、发放状态、对应的问题数据。
              <br />
              2.3 信息删除
              <br />
              您可以前往主页视图操作按钮-删除，以删除您的问卷标题、属性、发放状态、对应的问题数据。
              <br />
              如您对您的数据主体权利有进一步要求或存在任何疑问、意见或建议，可通过本声明中“如何联系我们”章节中所述方式与我们取得联系，并行使您的相关权利。{" "}
            </p>
          </div>

          {/* 3. 信息存储地点及期限 */}
          <div className="flex w-full items-start justify-start flex-col mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-gray-900">
              3. 信息存储地点及期限
            </h5>
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              3.1
              我们承诺，除法律法规另有规定外，我们对您的信息的保存期限应当为实现处理目的所必要的最短时间。
              <br />
              3.2 上述信息将会传输并保存至中国境内的服务器。{" "}
            </p>
          </div>

          {/* 4. 如何联系我们 */}
          <div className="flex w-full items-start justify-start flex-col mt-6">
            <h5 className="text-lg sm:text-xl font-bold text-gray-900">
              4. 如何联系我们
            </h5>
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              您可通过以下方式联系我们，并行使您的相关权利，我们会尽快回复。
              <br />
              邮箱：jinnywang@petalmail.com <br />
              如果您对我们的回复不满意,
              特别是当个人信息处理行为损害了您的合法权益时您还可以通过向有管辖权的人民法院提起诉讼、向行业自律协会或政府相关管理机构投诉等外部途径进行解决。
              您也可以向我们了解可能适用的相关投诉途径的信息。{" "}
            </p>
          </div>
          {/* 生效日期 */}
          <div className="flex w-full items-end justify-start flex-col mt-12">
            <p className="mt-2 text-base sm:text-lg text-gray-700 leading-relaxed">
              生效日期：2025.11.11
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
